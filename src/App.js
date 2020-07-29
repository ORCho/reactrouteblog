import React from 'react';
import Portfolio from './component/portfolio/index'
import Home from './component/home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './component/contactus';
import Post from './component/post';
import Navbar from './component/Navbar';
import Blog from './blogindex';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/blog/:postId' component={Blog} /> 
                <Route path='/contactus' exact component={Contact}/>
                <Route path='/' exact component={Home} />
                <Route path='/post' exact component={Post} />
            </Switch>
                <footer class="footer py-4">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                            <div class="col-lg-4 my-3 my-lg-0">
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <div class="col-lg-4 text-lg-right">
                                <a class="mr-3" href="#!">Privacy Policy</a>
                                <a href="#!">Terms of Use</a>
                            </div>
                        </div>
                    </div>
                </footer>
      
        </Router>

  );
}

export default App;
