import { useEffect, useState } from "react";
import "../App.css";
import "../components/Update.css"


function update() {




    return (
        <div>

            <div className="container">
                <form action="/action_page.php">
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="fname">Image</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="URL" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lname">Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Site name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="country">Description</label>
                        </div>
                        <div className="col-75">
                            <input id="country" name="country" placeholder="Description">
                                 
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="subject">Link</label>
                        </div>
                        <div className="col-75">
                            <input id="subject" name="subject" placeholder="URL" />
                        </div>
                    </div>
                    <div class="row">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default update;
