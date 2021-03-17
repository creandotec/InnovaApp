import styled from 'styled-components';

export const ZoneSwitch = styled.Image`
    position:relative;
    flex:0.75;    
    left: ${props => props.position || 0}%;
    width:13%;
`;