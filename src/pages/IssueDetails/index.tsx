import { Calendar, CaretLeft, Chat } from "phosphor-react";
import { HeaderContainer, IssueCardContainer, IssueTextContainer } from "./styles";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { useContext, useEffect, useState } from "react";
import { Issue, IssuesContext } from "../../contexts/IssuesContext";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export function IssueDetails() {
  const { issues } = useContext(IssuesContext);
  const { number } = useParams();

  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    const issueFromContext = issues.find((issue) => issue.number === Number(number));
    if (issueFromContext) {
      setIssue(issueFromContext);
    } else {
      api.get(`/repos/rafaelkremser/github-blog/issues/${number}`)
        .then((response) => setIssue(response.data));
    }
  }, [number, issues]);

  if (!issue) {
    return <h2>Carregando...</h2>;
  }

  return (
    <>
      <HeaderContainer />
      <IssueCardContainer>
        <article>
          <div>
            <header>
              <a href="/">
                <CaretLeft size={15} />
                VOLTAR
              </a>
              <a href={issue.html_url} target="_blank" rel="noreferrer">
                VER NO GITHUB
                <ExternalLinkIcon />
              </a>
            </header>
            <h1>{issue.title}</h1>
          </div>
          <footer>
            <div>
              <GitHubLogoIcon />
              rafaelkremser
            </div>
            <div>
              <Calendar size={15} weight="fill" />
              {issue.created_at}
            </div>
            <div>
              <Chat size={15} weight="fill" />
              {issue.comments} comentários
            </div>
          </footer>
        </article>
      </IssueCardContainer>
      <IssueTextContainer>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </IssueTextContainer>
    </>
  );
}
