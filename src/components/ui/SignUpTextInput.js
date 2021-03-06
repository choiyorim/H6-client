import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

export class SignUpTextInput extends React.Component {

    constructor (props) {
        super(props);
        this.state = {hasFocus: false,color:''};
    }

    renderLabel = () => {
        if(this.props.label!==undefined&&this.state.hasFocus){
            return(

                <View style={{alignSelf:'flex-start',marginLeft:10}}>
                    {this.renderCheck()}
                    <Text style={{color:this.state.color}}>{this.props.label}</Text>
                </View>
            )
        }
    };

    renderCheck = () => {
        if(this.props.checkNo==0){
            this.state.color='black';
        }
        else if (this.props.checkNo==1) {
            // return(
            //     <Text style={{color:'red', fontSize:10}}>{this.props.checkLabel}</Text>
            this.state.color='red' ;

        } else if (this.props.checkNo==2) {
            // return(
            //     <Text style={{color:'green', fontSize:10}}>{this.props.checkLabel}</Text>
            // )
            this.state.color='black';
        }
    };

    setFocus (hasFocus,color) {
        this.setState({hasFocus,color});
    };
    render() {
        // console.log(this.props.checkNo);
        return (
            <View style = { {alignItems: 'center',marginBottom:30 } }>
                {this.renderLabel()}
                <View style = {this.state.hasFocus &&this.state.color ? {flexDirection: 'row',
                    height: 35,
                    width: '90%',
                    backgroundColor: 'transparent',
                    paddingLeft: 10,
                    borderRadius:3,
                    borderBottomColor: this.state.color,
                    borderBottomWidth:2,} : styles.inputLayout }>
                    {/*{this.renderLabel()}*/}
                    {/**<View style = { styles.inputIcon }>
                     <Icon type = "font-awesome" name = { this.props.icon }/>
                     </View>**/}
                    <TextInput
                        // onBlur = {this.props.blur}
                        onChangeText = { this.props.handle }
                        value = { this.props.value }
                        secureTextEntry = { this.props.secureText }
                        style = { styles.input }
                        underlineColorAndroid = "transparent"
                        placeholder = { this.state.hasFocus ? this.props.changePlaceholder : this.props.placeholder }
                        onFocus={this.setFocus.bind(this, true)}
                        onBlur={this.setFocus.bind(this, true)}
                    />
                </View>
            </View>

        )
    }
}

SignUpTextInput.propTypes = {
    secureText: PropTypes.bool,
    handle: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    checkNo: PropTypes.number,
    checkLabel: PropTypes.string,
    blur: PropTypes.func,
    focus:PropTypes.func,
    changePlaceholder:PropTypes.string,
    colorChange:PropTypes.string

};

const styles = StyleSheet.create({
    inputLayout: {
        flexDirection: 'row',
        height: 50,
        width: '90%',
        backgroundColor: 'transparent',
        paddingLeft: 10,
        borderRadius:3,
        borderBottomColor: 'rgb(216,216,216)',
        borderBottomWidth: 2,
    },
    focusedTextInput: {

    },
    labelColor:{
        color: 'black',
    },
    placeholderColor:{
        color:'black'
    },
    input: {
        width: '100%',
    },
    inputIcon: {
        marginRight: 10,
        alignItems:'center',
        justifyContent:'center',
    }
});