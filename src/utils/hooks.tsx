import {
  useQuery,
  UseQueryResult
} from '@tanstack/react-query'
import axios from 'axios'

interface Language {
  language_name: string;
  image: string;
}

interface LanguagesData {
  data: {
    id: number;
    acf: {
      language: string;
      languages: Language[]
    }
  }[]
}

function useGetAvailableLanguages() {
  const result = useQuery<LanguagesData>({
    queryKey: ['available-languages'],
    queryFn: () => axios.get('https://andrew-dev.com/polyglot/wp-json/acf/v3/pages/')
      .then((res) => res)
    });

  return {...result};
}

export {useGetAvailableLanguages}

/*

function useGetAvailableLanguages(): UseQueryResult<Languages, Error> {
  const result: UseQueryResult<Languages, Error> = useQuery<Languages, Error>({
    queryKey: ['available-languages'],
    queryFn: () =>
      new Promise<Languages>((resolve, reject) => {
        axios
          .get('https://andrew-dev.com/polyglot/wp-json/acf/v3/pages/')
          .then((res) => {
            const endpoints: string[] = res.data[0].acf.language.split(',').map((item: string) => `https://andrew-dev.com/polyglot/wp-json/acf/v3/${item}/`)
            const requests = endpoints.map((endpoint) => axios.get(endpoint));
            return axios.all(requests).then((responses) => {
              const data: Languages = {
                data: {
                  id: res.data[0].id,
                  acf: {
                    language: res.data[0].acf.language,
                    languages: responses.map((response) => response.data),
                  },
                },
              };
              resolve(data);
            })
          })
          .catch((error) => reject(error))
      }),
  });

  return {...result};
}
*/