import { z } from "zod";
import { SearchPostForm } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IssuesContext } from "../../../contexts/IssuesContext";
import { useContext } from "react";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchIssues, issues } = useContext(IssuesContext)
  
  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }
  
  return (
    <SearchPostForm onSubmit={handleSubmit(handleSearchIssues)}>
      <header>
        <h3>Publicações</h3>
        <span>{ issues.length } publicações</span>
      </header>
      <form>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </SearchPostForm>
  )
}