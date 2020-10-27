import React from 'react'
import BComponent from './BComponent'
const AComponent = React.lazy(() => import('app1/AComponent'))

const App = () => (
  <div>
    <h2 style={{ textAlign: 'center' }}>app2 引入 A</h2>
    <React.Suspense fallback='Loading A'>
      <AComponent />
    </React.Suspense>
    <BComponent />
  </div>
)

export default App
