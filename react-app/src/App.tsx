import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button';

function App() {
    //let items = [
    //    'New york',
    //    'San Francisco',
    //    'Tokyo',
    //    'London',
    //    'Paris'
    //]
    //const handleSelectItem = (item: string) => {
    //    console.log(item)
    //}

    return <div>
        <Alert>
            <span> Hello World </span>
        </Alert>
        <Button color="primary" onClick={() => console.log('clicked') }>Button</Button>
    </div>
    //<div>
    //    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    //</div>
}

export default App;