import { BuildingOffice } from "@phosphor-icons/react";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Users } from "phosphor-react";
import { ProfileCardContainer } from "./styles";

export function ProfileCard() {
  return (
    <ProfileCardContainer>
        <img src="https://github.com/rafaelkremser.png" alt="Foto de perfil do Github" />

        <article>
          <div>
            <header>
              <h1>Rafael Kremser</h1>
              <a href="https://github.com/rafaelkremser" target="_blank">
                GITHUB
                <ExternalLinkIcon />
              </a>
            </header>
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
          </div>
          <footer>
            <div>
              <GitHubLogoIcon />
              rafaelkremser
            </div>
            <div>
              <BuildingOffice size={15} weight="fill" />
              Rocketseat
            </div>
            <div>
              <Users size={15} weight="fill" />
              32 seguidores
            </div>
          </footer>
        </article>
      </ProfileCardContainer>
  )
}