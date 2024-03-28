/* eslint-disable react/prop-types */
const Basket = ({ items, handleRemove, handleAdd, handleReduce }) => {
	let totalP = 0;

	let disp = items.map((x) => {
		let price = x.unitPrice * x.count;
		totalP += price;
		return (
			<div className="tc dib br3 ma2 mw5 w-40" key={x.name}>
				<div className="bg-gray br3">
					<h3>{x.name}</h3>
					<img className="w-70 br3 h4" alt="prod" src={x.img} />
					<div>
						<img
							onClick={() => handleReduce(x.name)}
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiZJREFUSEuVlb1rFUEUxX+n0kAQ7EQRU1kENOQPEGwENZVaaKOVBG2CELDyE2sLEQJip4VgIRZKIGAhASuLdOGhhDT2gUBAkrwrs1/zsbO7z23eY5iZc8+5554R//kJsOpM8T9cKNarheCnG6K6QVjmoskqc1f0fUeAG8BlYA40A+YIbIM2wFYRnzDtF0XkGLQYergriBWMmYEifgP3gG/tfUIdAM+Ap+WBnhKaGzUGe4h46bQM2eQkeg488dW02lphhs1s9jwAXoVMSgDfzAWDL2nVXRwyLhoDF4AfNUjAQNNgv4ATWWF6lYpkGYGdQ+y7roc9uC9Yafs6bp3H6UW8hvhcAAR9/Apcnczdg+1/i1j0AOX+P8DJIYB83bFzwDaAeVd/IJH2hE3VMeDTIB79vHNl3prFjh3geN3LuuhdYDqyfVnYoB5NPHl67q5jKcAIOBvaK2GTqJcRy5PdNDGbNvkDcCs37kl++vkNSg8lErw3uOMZlMi3Be+iwKoETw43quWnvVi9CXwsAAKiU4KRidNxNk+SRVF6jARzJv76QfMzfwlYS0fLvwcZR8Usx6CLYOu1M8KoqBV9BLwYzp/2y2ViCdPrsKCOB0ePwVyqqhiW5jHptOwhsFwnaRgnYVSkfl9AvME4NTDd7sG5C3zPWbyLQS3XUdB1MJdR50FnhJmJLYyfgjUrQ+2gJWnzBAyFT268ehuUWKQrfntj2T9Q3UlSXfAPtizPIIiOXQ0AAAAASUVORK5CYII="
						/>
						<span className="pa3">{x.count}</span>
						<img
							onClick={() => handleAdd(x)}
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAkVJREFUSEuFlr1rVUEQxX9TqSCCnShiKgtBg3+AYCOoqdRCG61ETCOCYOVXsLYIgiB2WggWYqEEAhYiWFmkk4dB0tgLgiDqG9m9u3dnv25ecXnvzu7MmTlnZp5QfgRQ/6hM7kWy2DOCoOGG/Q7Sc9UPkUUJIMLpxqUhQA4mgRd2oFwQOK2wCLIAqghbKBvAGvAa+JPSzYO5X2PeBYAzwBNgwZ6pHMEmcB14H20W9BCg9vAAuB/f+/pO1ow5cBvhUXnQcDCmtoJybxvUlTmgvomy2snA31kC3jbl05ZbSfIclROgn6LcrIp2A1+Bff0A7riXr390qjYDjkbiLcnLgdSpBCKg1CTtKOeANxFEgCLvQM82KU9CkNBQRQZVlGfANefYZvBdYH+ElojKmqQToOq3DYXjKYPB/gvYVdRH8ibparWcKz+AvT4Dc+Un4Ii2nxQgCDPNnAx1GcD52lNwwEzgcHvEjcyYErUGzzgjvyAccVozncxL4FKjq7OMgtvtSH6BcMV1tSX5MvB8WkWhpFWdKmVfBF6VJDuCXZMcrGhIuyFmPFFJmYEuAr9Lkp3fUwjrzV0zWfIR0hzkpKAfrdxHOYSpeQeVh3ajtXdGM+INlMdBcH7RZPsgGbgLrIRxY3jP16Ep5T/gFrA6dG8a770A7u4SwlNUDqQLjdUnbKJyFfRDa/pZmRpAI9KdwHnAzahjIIcEVYVvwGdgfRhq8tcufbtzOxst36spcp6+fZ87tf8wolg9IdGQD6+ctHSmUTBPm+XgPzA24yD3LNSiAAAAAElFTkSuQmCC"
						/>
					</div>
					<div>
						<p className="b">Price:KSh.{price}</p>
					</div>
				</div>

				<button
					className="br3 bg-gray white pv2 f6"
					onClick={() => handleRemove(x.name)}
				>
					REMOVE
				</button>
			</div>
		);
	});

	return (
		<div>
			{disp}
			<br />
			<span className="f3 fw5">
				{" "}
				TOTAL:<span className="green fw6">KSh{totalP}</span>
			</span>
		</div>
	);
};

export default Basket;
