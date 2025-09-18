import { render, screen } from '@testing-library/react';
import SampleComponent from '../../components/sample_component';
import { describe, it, expect } from 'vitest';
// Import jest-dom matchers for Vitest
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';

describe('sample test group', () => {
    it('renders the correct greeting message from sample component', () => {
        render(<SampleComponent name="World" />);
        expect(screen.getByText('Hello, World!')).toBeInTheDocument();
    });
});
