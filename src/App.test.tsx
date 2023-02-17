import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Testing App Component', () => {
    test('App renders correctly', () => {
        render(<App />)
        const app = screen.getByTestId('app');
        expect(app).toBeInTheDocument;
        cleanup();
    })
})
