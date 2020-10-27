import React from 'react'
const AComponent = React.lazy(() => import('app1/AComponent'))
const BComponent = React.lazy(() => import('app2/BComponent'))

const App = () => (
  <div>
    <h2 style={{ textAlign: 'center' }}>App 3, Remote A, Remote B</h2>
    <React.Suspense fallback='Loading A B'>
      <AComponent />
      <BComponent />
    </React.Suspense>
  </div>
)

export default App
