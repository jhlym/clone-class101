import styled from "styled-components";

export const CenterBox = styled.div<any>`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyConetent || "center"};
  align-items: center;
`;
