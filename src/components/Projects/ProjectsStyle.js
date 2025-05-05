import styled from 'styled-components';
import _default from '../../themes/default';

// Container styling
export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

// Wrapper styling for alignment and spacing
export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

// Title styling
export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

// Description styling
export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

// Toggle button group with border and font styling
export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

// Styling for individual toggle buttons with active state and hover effects
export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    background: ${({ active, theme }) => (active ? theme.primary + '20' : 'transparent')};
    
    &:hover {
        background: ${({ theme }) => theme.primary + '8'};
    }
    
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

// Divider with width and color from the theme
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

// Card container with flex layout for responsive design
export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;

    @media (max-width: 960px) {
        gap: 16px;
    }
    
    @media (max-width: 640px) {
        gap: 12px;
    }
`;
