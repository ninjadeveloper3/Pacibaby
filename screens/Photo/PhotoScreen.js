import React from 'react';
import {Alert, AsyncStorage, Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions';
import {FontAwesome, Ionicons, MaterialCommunityIcons,Entypo} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import base64 from 'react-native-base64';
import {NavigationEvents} from "react-navigation";
import * as FaceDetector from 'expo-face-detector';




const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class PhotoScreen extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.setState({isVisible: true})
    //   }

    static navigationOptions = {
        headerShown: false,
        headerBackground: () => null,
        headerMode: null,
        headerTitle: () => null,
    };

    state = {
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
        isCamera: false,
        isVisible: true
    };

    async componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        // Camera roll Permission
        if (Platform.OS === 'ios') {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        // Camera Permission
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasPermission: status === 'granted'});
    };

    handleCameraType = () => {
        const {cameraType} = this.state;

        this.setState({
            cameraType:
                cameraType === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
        });
        Alert.alert(
            'Align face within the box and eye within the circle!',
            'Press OK to Continue',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK'},
            ]
        );
    };

    takePicture = async () => {
        if (this.camera) {
            let uri;
            let base64_image;
            await this.camera.takePictureAsync({base64: true, quality:0})
                .then((function (object) {
                    uri = object.uri;
                    base64_image = object.base64
                }))
                .catch(function (error) {
                    alert(error);
                });
                this.setState({isVisible: false})
            // this.props.navigation.push('EditImageScreen', {imageURI: uri});
            // this.props.navigation.push('LoadingScreen');
            // line below saves the image to user's photo library
            await MediaLibrary.saveToLibraryAsync(uri);
            Alert.alert(
                'Image saved to gallery!',
                'Press OK to Continue',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'OK', onPress: () => {
                            AsyncStorage.setItem("@myApp:Image", base64_image);
                            this.props.navigation.push('EditImageScreen', {imageURI: uri})

                        }
                    },
                    // {text: 'OK', onPress: () => {this.props.navigation.navigate('LoadingScreen')}},
                ]
            );
        }
    };

    pickImage = async () => {
        // this.setState({isVisible: false})
        // this.setState({isCamera: false})
        let uri;
        let base64_image;
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
        uri = result.uri;
        base64_image = result.base64;    
        this.setState({isVisible: false})
        await this.props.navigation.push('EditImageScreen', {imageURI: uri});
    };

    _renderModalContent = () => (
        <View style={styles.modalContent}>
          <Text>Hello!</Text>
          {this._renderButton('Close', () => this.setState({ isVisible: null }))}
        </View>
      );

      _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text>{text}</Text>
          </View>
        </TouchableOpacity>
      );

      _handleCameraTypeModal = () => {
        this.setState({isVisible: false})
        this.props.navigation.navigate('ProfileScreen')
      }

    openCamera(){
        this.setState({isVisible: false})
        this.setState({isCamera: true})
    }

    handleFacesDetected  = async ({ faces }) => {
        if(faces.length === 1){
        //   this.setState({ face: true });
          console.log("face detected!",faces)
        }
      }


    render() {
        const {hasPermission} = this.state;
        const {imageUri} = this.state;
        if (hasPermission === null) {
            return <View/>;
        } else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{flex: 1}}>
                    {
                        !this.state.isVisible ? 

                        this.state.isCamera ? //Launch Camera

                        <Camera
                        style={{flex: 1}}
                        type={this.state.cameraType}
                        faceDetectorSettings={{
                            mode: FaceDetector.Constants.Mode.fast,
                            detectLandmarks: FaceDetector.Constants.Landmarks.all,
                            runClassifications: FaceDetector.Constants.Classifications.all,
                            minDetectionInterval: 100,
                            tracking: true,
                         }}
                         onFacesDetected={this.handleFacesDetected}
                        ref={ref => {
                            this.camera = ref;
                        }}>
                        <View style={styles.circleAlign}>
                            <View style={styles.circle}/>
                        </View>
                        <View style={styles.rectangleAlign}>
                            <View style={styles.rectangle}/>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: 30,
                            }}>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}
                                onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                                <Ionicons
                                    name="ios-home"
                                    style={{color: '#fff', fontSize: 40, opacity: 1.0}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}
                                onPress={() => this.takePicture()}>
                                <FontAwesome
                                    name="camera"
                                    style={{color: '#fff', fontSize: 40}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}
                                onPress={() => this.handleCameraType()}>
                                <MaterialCommunityIcons
                                    name="camera-switch"
                                    style={{color: '#fff', fontSize: 40}}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                        :
                        null //Launch Gallery

                        : //Show Modal
                        // <View style={styles.container}
                        // style={{ zIndex: 1100 }}
                        // >
                        // <Modal isVisible={this.state.isVisible}>
                        //     {this._renderModalContent()}
                        // </Modal>
                        // </View>

                        <Modal
                            transparent={true}
                            // animationType={'none'}
                            visible={this.state.isVisible}
                            style={{ zIndex: 1100 }}
                            onRequestClose={() => { }}>
                            <View style={styles.modalBackground}>
                            <View style={styles.modalOuterWrapper}>
                            <View style={{marginTop: 30}}/>
                            <TouchableOpacity onPress={() => this.openCamera()} style={styles.button}>
                                <Text style={styles.buttonText}>Open Camera</Text>
                            </TouchableOpacity>
                            <View style={{margin: 8}}/>
                            <TouchableOpacity onPress={() => this.pickImage()} style={styles.button}>
                                <Text style={styles.buttonText}>Upload from gallery</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}
                                onPress={() => this._handleCameraTypeModal()}>
                                <Entypo name="circle-with-cross" size={30} color="red" />
                            </TouchableOpacity>

                                
                             </View>
                             </View>
                             </Modal>

                        

                    }

                    
                        
                    
                    
                </View>
            );
        }
    }
}

const CIRCLE_SIZE = 28;
const RECT_SIZE = 250;


const styles = StyleSheet.create({
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        borderWidth: 4,
        borderColor: "#42B6C7"
    },
    circleAlign: {
        justifyContent: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        top: windowHeight / 2.3,
        marginRight: windowWidth / 2.8,
    },
    rectangle: {
        height: RECT_SIZE,
        width: RECT_SIZE,
        borderWidth: 10,
        borderColor: '#42B6C7',
        backgroundColor: 'transparent',
        zIndex: -10,
    },
    rectangleAlign: {
        alignSelf: 'center',
    },

    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#rgba(0, 0, 0, 0.5)',
        zIndex: 1000
      },
      modalOuterWrapper: {
        backgroundColor: '#FFFFFF',
        height: '30%',
        width: '80%',
        borderRadius: 10,
        display: 'flex',
        position: 'relative'
        // alignItems: 'center',
        // justifyContent: 'space-around'
      },
      button: {
        // backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 20,
        color: 'black',
      }, 
});