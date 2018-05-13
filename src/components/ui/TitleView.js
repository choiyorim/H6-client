import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

export class TitleView extends React.Component {

    renderLeftIcon = () => {
        if (this.props.leftIcon)
            return (<Icon style={styles.leftIcon} name={this.props.leftIcon} type='ionicon' size={24}
                          onPress={this.props.leftIconHandler}/>);
        return null;
    };

    renderRightIcon = () => {
        if (this.props.rightIcon)
            return (<Icon style={styles.rightIcon} name={this.props.rightIcon} type='ionicon' size={24}
                          onPress={this.props.rightIconHandler}/>);
        return null;
    };

    render() {
        return (
            <View>
                <View style={styles.statusBar}></View>
                <View style={styles.titleBar}>
                    {this.renderLeftIcon()}
                    <Text style={styles.titleBarText}>{this.props.title}</Text>
                    {this.renderRightIcon()}
                </View>
            </View>
        )
    }
}

TitleView.propTypes = {
    title: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    leftIconHandler: PropTypes.func,
    rightIconHandler: PropTypes.func,

};


const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#8f96a0',
        height: StatusBar.currentHeight
    },
    titleBar: {
        flexDirection: 'row',
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8f96a0',
    },
    titleBarText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18
    },
    leftIcon: {
        alignSelf: 'flex-start'

    },
    rightIcon: {
        alignSelf: 'flex-end'
    }
});