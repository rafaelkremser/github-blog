import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { ProfileCard } from "../../components/ProfileCard";
import { SearchForm } from "./SearchForm";
import { PostsContainer } from "./styles";
import { IssuesContext } from "../../contexts/IssuesContext";
import { useContext } from "react";

export function Posts() {
  const { issues } = useContext(IssuesContext);

  return (
    <>
      <Header />
      <ProfileCard />

      <SearchForm />

      <PostsContainer>
        {issues.map((issue) => (
          <Post key={issue.id} title={issue.title} body={issue.body} />
        ))}
      </PostsContainer>
    </>
  );
}
