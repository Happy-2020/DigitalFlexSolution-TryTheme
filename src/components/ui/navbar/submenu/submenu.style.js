import styled from 'styled-components';

export const SubmenuWrap = styled.ul `
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: 0 2px 29px rgba(0,0,0,0.05);
    border-bottom: 3px solid #fd5b01;
    background-color: #000000;
    transform: translateY(50px);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.2s;
    transition-duration: 0.4s;
    visibility: hidden;
    opacity: 0;
    min-width: 240px;
    padding: 20px 0;
    z-index: 100;
    pointer-events: none;
`;