import React from 'react';
import $ from 'jquery';
import 'jstree';
import './../../../node_modules/jstree-bootstrap-theme/dist/themes/proton/style.css';

export default class Playlist extends React.Component {

    componentDidMount() {
        init($(this._tree), this.props.playlists);
    }

    componentWillUpdate(newProps) {
        $(this._tree).jstree('destroy');
        init($(this._tree), newProps.playlists);
    }

    render() {
        return (<div ref={(c) => this._tree = c}></div>);
    }

}

function init(root, playlists) {
    root.jstree({
        core: {
            check_callback: true,
            themes: {
                name: 'proton',
                responsive: true
            },

            data: playlists
        },
        plugins: [
            // "dnd"
        ]
    }).on('changed.jstree', function (e, data) {
        if (data.selected && data.selected.length > 0) {
            let firstSelectedArtistName = data.instance.get_node(data.selected[0]).text;
            console.log(firstSelectedArtistName);
        }
    });
}
