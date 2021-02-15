// import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `


function Title(props){
  return <div>{props.children}</div>
}

export default function Home() {
  return <Title>Minha primeira pagina com react</Title>
}
