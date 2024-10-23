import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface Issue {
  id: number;
  title: string;
  body: string;
  number: number;
  comments: number;
  html_url: string;
  created_at: string;
}

interface IssueContextType {
  issues: Issue[];
  fetchIssues: (query?: string) => Promise<void>;
}

export const IssuesContext = createContext({} as IssueContextType);

interface IssuesProviderProps {
  children: ReactNode;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:rafaelkremser/github-blog ${query || ''}`,
      },
    });

    const formattedIssues = response.data.items.map((issue: Issue) => ({
      ...issue,
      created_at: capitalizeFirstLetter(
        formatDistanceToNow(new Date(issue.created_at), {
          locale: ptBR,
          addSuffix: true,
        })
      )
    }));

    setIssues(formattedIssues);
  }, []);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <IssuesContext.Provider
      value={{
        issues,
        fetchIssues,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
