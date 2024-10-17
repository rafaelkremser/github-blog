import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
  id: number;
  title: string;
  body: string;
}

interface IssueContextType {
  issues: Issue[];
  fetchIssues: (query?: string) => Promise<void>;
}

export const IssuesContext = createContext({} as IssueContextType);

interface IssuesProviderProps {
  children: ReactNode;
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:github-blog ${query || ''}`,
      },
    });

    setIssues(response.data.items);
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
