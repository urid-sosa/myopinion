import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg" style={{backgroundColor: '#2aa2e7'}}>
          <div class="container-fluid">
            <a class="navbar-brand" href="/" style={{color: 'white'}}>MyOpinion</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            </div>
         </div>
        </nav>
    )
}

export default Navbar;