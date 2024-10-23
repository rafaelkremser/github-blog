import { PostCard } from "./styles";

interface PostProps {
  number: number
  title: string
  body: string
  createdAt: string
}

export function Post({ number, title, body, createdAt }: PostProps) {
  return (
    <a href={`issues/${number}`}>
      <PostCard>
        <header>
          <h1>{title}</h1>
          <span>{createdAt}</span>
        </header>
        <p>{body}</p>
      </PostCard>
    </a>
  )
}