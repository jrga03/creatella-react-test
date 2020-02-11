import React from 'react';

import { getProducts } from '../../api';

import { isBottomOfPage } from '../../utils/scroll';

import Loader from '../../components/Loader';
import FaceList from '../../components/FaceList';
import SortBy from '../../components/SortBy';

import { Container, Header } from './styles';

const SORT_OPTIONS = [
    { value: 'price', label: 'Price' },
    { value: 'size', label: 'Size' },
    { value: 'id', label: 'ID' }
];

class App extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            isLoading: false,
            page: 1,
            products: [],
            preloadedProducts: [],
            shouldRenderNextPage: true,
            fetchingNextPage: false,
            sortBy: null
        }
    }

    componentDidMount() {
        window.addEventListener( 'scroll', this.onScroll );

        this.getData();
    }

    componentDidUpdate( prevProps, prevState ) {
        if ( prevState.sortBy !== this.state.sortBy ) {
            this.getData();
        }

        if ( prevState.preloadedProducts.length !== this.state.preloadedProducts.length
            && this.state.preloadedProducts.length > 0
            && this.state.shouldRenderNextPage
        ) {
            this.loadMoreItems()
        }
    }

    componentWillUnmount() {
        window.removeEventListener( 'scroll', this.onScroll );
    }

    /**
     * Callback for scroll event
     */
    onScroll = () => {
        /**
         * Check if bottom of page is reached and
         * page is not set to render the next page
         */
        if ( isBottomOfPage() && !this.state.shouldRenderNextPage ) {
            this.setState({
                isLoading: true,
                shouldRenderNextPage: true
            }, this.loadMoreItems );
        }
    }

    /**
     * Fetch products
     */
    getData = () => {
        this.setState({ isLoading: true }, async () => {
            const { page, sortBy } = this.state;
            const sort = sortBy ? sortBy.value : null;
            const products = await getProducts({ page, limit: 30, sort });

            this.setState(( state ) => ({
                products,
                isLoading: false,
                page: state.page + 1,
                fetchingNextPage: true,
                shouldRenderNextPage: false
            }), this.preLoadNextPage );
        });
    }

    /**
     * Fetch next page in advance
     */
    preLoadNextPage = async () => {
        const { page, sortBy } = this.state;
        const sort = sortBy ? sortBy.value : null;
        const products = await getProducts({ page, limit: 30, sort });

        this.setState(( state ) => ({
            preloadedProducts: products,
            page: state.page + 1,
            fetchingNextPage: false
        }));
    }

    loadMoreItems = () => {
        if ( this.state.preloadedProducts.length > 0 ) {
            this.setState(( state ) => ({
                products: [
                    ...state.products,
                    ...state.preloadedProducts
                ],
                preloadedProducts: [],
                isLoading: false,
                shouldRenderNextPage: false,
                fetchingNextPage: true
            }), this.preLoadNextPage );
        } else if ( !this.state.fetchingNextPage ) {
            this.setState({ fetchingNextPage: true }, this.preLoadNextPage );
        }
    }

    /**
     * Sets selected sort method to state
     * @param {object} selected - Selected option
     */
    onSortChange = ( selected ) => {
        const { sortBy } = this.state;
        const current = sortBy ? sortBy.value : null;
        const next = selected ? selected.value : null;
        if ( current !== next ) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.setState({
                products: [],
                preloadedProducts: [],
                page: 1,
                sortBy: selected
            });
        }
    }

    render() {
        const { sortBy, products, isLoading } = this.state;

        return (
            <Container>
                <Header>
                    <SortBy
                        value={ sortBy }
                        options={ SORT_OPTIONS }
                        onChange={ this.onSortChange }
                    />
                </Header>
                { products.length === 0
                    ? <Loader />
                    : <FaceList faces={ products } loading={ isLoading } />
                }
            </Container>
        );
    }
}

export default App;
