import React from 'react'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {BrowserRouter as Router} from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      // if come back to the page it doesn’t refetch those query 
      refetchOnWindowFocus: false,
      // retry(failureCount, error) {
      //   // if the error.status is 404 then we’re not gonna bother retrying we’ll just return false
      //   if (error.status === 404) return false
      //   // Otherwise if the failerCount is less than two so we haven’t retried twice already then we’ll return true and we’ll allow them to retry it again. Sometimes there’re weird network things maybe retrying it will fix the problem. 
      //   else if (failureCount < 2) return true
      //   // Finally if neither of those is true then we’ll just return false
      //   else return false
      // }
    },
    mutations: {
      onError: (err, variables, recover) =>
        typeof recover === 'function' ? recover() : null
    }
  }
})

function AppProviders({children}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {children}
      </Router>
    </QueryClientProvider>
  )
}

export {AppProviders}