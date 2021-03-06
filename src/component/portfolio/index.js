import React from "react";
import portname from "./portname";

function Portfolio() {
    
    return <div>
       <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                <h2 class="section-heading text-uppercase">Portfolio</h2>
                <h3 class="section-subheading text-muted"></h3>
                </div>
                    <div class="row">
                        {
                            portname.map(function (portname1) {
                                return (
                                    <div class="col-lg-4 col-sm-6 mb-4">
                                        <div class="portfolio-item">
                                        <div class="portfolio-link" data-toggle="modal" >
                                        <a href={portname1.projectURL}>
                                        <div class="portfolio-hover">
                                          
                                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                                </div>

                                        
                                                    <img class="img-fluid" src={portname1.imageURL} alt=""></img>
                                                    
                                                    </a>
                                        </div>
                                            <div class="portfolio-caption">
                                                <div class="portfolio-caption-heading"><a href={portname1.projectURL}>{portname1.name}</a></div>
                                            <div class="portfolio-caption-subheading text-muted">{portname1.details}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </section>
                
                
            
                             
        
    </div>

}
export default Portfolio;