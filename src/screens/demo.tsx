import React, { ReactElement } from 'react';
import Dropzone from 'react-dropzone';
import { FormattedMessage } from 'react-intl';

function Demo(): ReactElement {
	return (
		<Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
			{({ getRootProps, getInputProps }) => (
				<section>
					{/* eslint-disable react/jsx-props-no-spreading */}
					<div {...getRootProps()}>
						<input {...getInputProps()} />
						<p>
							<FormattedMessage id="dropzone.description" />
						</p>
					</div>
				</section>
			)}
		</Dropzone>
	);
}

export default Demo;
