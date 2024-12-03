import React, { FC } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubeProps {
	className: string;
}

const ReactYoutube: FC<YoutubeProps> = ({ className }) => {
	const onPlayerReady: YouTubeProps["onReady"] = (event) => {
		// Access to player in all event handlers via event.target
		event.target.pauseVideo();
	};

	const opts: YouTubeProps["opts"] = {
		playerVars: {
			autoplay: 0
		}
	};

	return (
		<>
			<YouTube
				iframeClassName={className}
				videoId="FUFyaJHyyds" // Изменено на новое видео
				opts={opts}
				onReady={onPlayerReady}
			/>
		</>
	);
};

export default ReactYoutube;
