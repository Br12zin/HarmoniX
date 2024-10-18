import { Button } from "../components/ui/button";

const Home = () => {
  return (<div>
    <div style={{display: 'flex', justifyContent: 'flex-end', padding: '10px'}} className="me-52">
    <Button className="me-10 bg-yellow-500 border border-ronded">entrar</Button>
    <Button className="bg-yellow-500">cadastrar</Button>
    </div>
    <p style={{display: 'flex', justifyContent: 'flex-end', padding: '1px' }} className="me-64"><a href="">continuar sem login</a></p>
    </div>
  );
}

export default Home;