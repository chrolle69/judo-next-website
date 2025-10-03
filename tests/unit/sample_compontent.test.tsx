import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SampleComponent from '@/app/components/sample_component';
// Import jest-dom matchers for Vitest
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';

describe('sample test group', () => {
    it('renders the correct greeting message from sample component', () => {
        render(<SampleComponent name="World" />);
        expect(screen.getByText('Hello, World!')).toBeInTheDocument();
    });
});

