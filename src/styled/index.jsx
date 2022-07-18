/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
export default function Styled() {
    const Button = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
        color: white;
    }
    `
    const color = 'white'
    return (
        <div>
            <Button>This my button component.</Button>
            <div
                css={css`
      background-color: hotpink;
      &:hover {
        color: ${color};
      }
    `}
            >
                This has a hotpink background.
            </div>
        </div>)
}