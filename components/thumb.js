import styled from 'styled-components';

// const thumbProps = {
//     position: Number
// };

// export const ThumbCursor = styled("image", thumbProps)`
//     left: ${props => props.position};
//     flex:0.7;
//     width:7%;
// `;

export const ThumbCursor = styled.Image`
    position:relative;
    flex:0.7;    
    left: ${props => props.position || 0}%;
    width:7%;
`;