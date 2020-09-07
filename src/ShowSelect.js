import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import App from './App'


function ShowSelect(props) {
    const [shows, setShow] = useState('')

    return shows ? (
			<div>
				<App show={shows}/>
			</div>
		) : (
			<Grid container>
				<Button
					onClick={() => setShow("true - detective")}
					value="true - detective"
					variant="contained"
				>
					TRUE DETECTIVE
				</Button>
				<Button
					onClick={() => setShow("westworld")}
					value="westworld"
					variant="contained"
				>
					WESTWORLD
				</Button>
				<Button
					onClick={() => setShow("chernobyl")}
					value="chernobyl"
					variant="contained"
				>
					CHERNOBYL
				</Button>
				<Button
					onClick={() => setShow("arrested - development")}
					value="arrested - development"
					variant="contained"
				>
					ARRESTED DEVELOPMENT
				</Button>
				<Button
					onClick={() => setShow("seinfeld")}
					value="seinfeld"
					variant="contained"
				>
					SEINFELD
				</Button>
				<Button
					onClick={() => setShow("malcolm - in - the - middle")}
					value="malcolm - in - the - middle"
					variant="contained"
				>
					MALCOLM IN THE MIDDLE
				</Button>
			</Grid>
		);
}

export default ShowSelect;