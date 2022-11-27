import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { ProductProps } from '../components/Product';

export const mockProducts: ProductProps[] = [
  {
    id: 2,
    name: 'AirPods',
    brand: 'Apple',
    description:
      'Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
    price: '1200.00',
    createdAt: '2022-08-21T19:30:29.567Z',
    updatedAt: '2022-08-21T19:30:29.567Z',
  },
  {
    id: 1,
    name: 'Iphone 11 128 GB',
    brand: 'Apple',
    description:
      'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp',
    price: '5000.00',
    createdAt: '2022-08-21T19:30:29.567Z',
    updatedAt: '2022-08-21T19:30:29.567Z',
  },
];

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <Provider store={store}>
        <Home products={{} as ProductProps[]} />
      </Provider>
    );

    expect(screen.getByText('Mks')).toBeInTheDocument();
  });

  it('renders the shimmers when products not loaded', () => {
    render(
      <Provider store={store}>
        <Home products={{} as ProductProps[]} />
      </Provider>
    );

    expect(screen.getByTestId('shimmer')).toBeInTheDocument();
  });

  it('renders the products when products loaded', () => {
    render(
      <Provider store={store}>
        <Home products={mockProducts} />
      </Provider>
    );

    expect(screen.getByText('Iphone 11 128 GB')).toBeInTheDocument();
  });
});
