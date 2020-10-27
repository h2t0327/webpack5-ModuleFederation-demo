import React from 'react'
import AComponent from './AComponent'
const BComponent = React.lazy(() => import('app2/BComponent'))

const App = () => (
  <div>
    <h2 style={{ textAlign: 'center' }}>app1 引入 B</h2>
    <AComponent />
    <React.Suspense fallback='Loading B'>
      <BComponent />
    </React.Suspense>
  </div>
)

export default App
