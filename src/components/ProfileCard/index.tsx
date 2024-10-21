import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Code, Users } from "phosphor-react";
import { ProfileCardContainer } from "./styles";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

interface User {
  name: string
  login: "rafaelkremser"
  bio: string
  public_repos: number
  followers: number
}

export function ProfileCard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(`/users/rafaelkremser`);
      setUser(response.data);
    }

    fetchUser();
  }, []);

  if (!user) {
    return <div>Carregando...</div>;
  }
  
  return (
    <ProfileCardContainer>
        <img src="https://github.com/rafaelkremser.png" alt="Foto de perfil do Github" />

        <article>
          <div>
            <header>
              <h1>{user.name}</h1>
              <a href="https://github.com/rafaelkremser" target="_blank">
                GITHUB
                <ExternalLinkIcon />
              </a>
            </header>
            <p>{user.bio}</p>
          </div>
          <footer>
            <div>
              <GitHubLogoIcon />
              rafaelkremser
            </div>
            <div>
              <Code size={15} weight="bold" />
              {user.public_repos} repositórios
            </div>
            <div>
              <Users size={15} weight="fill" />
              {user.followers} seguidores
            </div>
          </footer>
        </article>
      </ProfileCardContainer>
  )
}