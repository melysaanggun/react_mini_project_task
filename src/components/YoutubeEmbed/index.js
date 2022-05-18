import React from "react";
import PropTypes from "prop-types";
import "./youtube-embed.css"

const YoutubeEmbed = ({ embedId, caption }) => (
    <div className="video-responsive">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <h3>{caption}</h3>
    </div>
  );

  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default YoutubeEmbed;
