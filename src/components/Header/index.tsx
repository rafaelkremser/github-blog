import { api } from '../../lib/axios'
import { HeaderContainer } from './styles'

export function Header() {
  function getUser() {
    const user = api.get('/users/rafaelkremser')

    console.log(user);
  }
  
  return (
    <HeaderContainer>
      <button onClick={getUser}>

      </button>
    </HeaderContainer>
  )
}
