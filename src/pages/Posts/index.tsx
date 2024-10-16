import { Header } from "../../components/Header";
import { ProfileCard } from "../../components/ProfileCard";
import { SearchPostForm } from "./styles";

export function Posts() {
  return (
    <>
      <Header />
      <ProfileCard />

      <SearchPostForm>
        <header>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </header>
        <form>
          <input type="text" placeholder="Buscar conteúdo" />
        </form>
      </SearchPostForm>
    </>
  )
}