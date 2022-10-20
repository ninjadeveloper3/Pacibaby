import React from 'react';
import {StyleSheet, View, ImageBackground, Image, Button} from 'react-native';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
});

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

export default class App extends React.Component {

    static navigationOptions = {
        headerShown: false,
        headerBackground: () => null,
        headerMode: null,
        headerTitle: () => null,
    };

    componentDidMount() {
        // this.animation.play();
        // Or set a specific startFrame and endFrame with:
        this.animation.play(30, 700);
    }

    handleCameraType = () => {
    }

    render() {
        return (
            <View style={styles.animationContainer}>
                <LottieView
                    ref={(animation) => {
                        this.animation = animation;
                    }}
                    style={{
                        width: 250,
                        height: 250,
                        backgroundColor: '#fff',
                    }}
                    loop={false}
                    source={require('../../assets/loadingSuccess.json')}
                    onAnimationFinish={
                        () =>{
                            sleep(4000);
                            this.props.navigation.popToTop();
                            this.props.navigation.navigate('OutputScreen')
                        }}
                    // OR find more Lottie files @ https://lottiefiles.com/featured
                />
            </View>
        );
    }
}
