import React from "react";
import { View, ScrollView, ImageBackground, Text, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default () => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#5D5D5D",
					paddingVertical: 20,
				}}>
				<View 
					style={{
						height: 60,
						backgroundColor: "#79C9F4",
						borderColor: "#549CB0",
						borderRadius: 14,
						borderWidth: 1,
						marginBottom: 68,
						marginHorizontal: 23,
					}}>
				</View>
				<View 
					style={{
						alignItems: "center",
					}}>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/w1Bbgc074x/vlqi02o8_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							paddingTop: 19,
							paddingHorizontal: 29,
						}}
						>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 30,
								marginBottom: 46,
							}}>
							{"1"}
						</Text>
					</ImageBackground>
				</View>
				<ImageBackground 
					source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/w1Bbgc074x/utfvyq0o_expires_30_days.png"}} 
					resizeMode = {'stretch'}
					style={{
						alignSelf: "flex-start",
						paddingTop: 18,
						paddingHorizontal: 29,
						marginLeft: 100,
					}}
					>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 30,
							marginBottom: 47,
						}}>
						{"2"}
					</Text>
				</ImageBackground>
				<View 
					style={{
						alignItems: "center",
					}}>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/w1Bbgc074x/c9lu89dp_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							paddingTop: 20,
							paddingHorizontal: 28,
						}}
						>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 30,
								marginBottom: 45,
							}}>
							{"3"}
						</Text>
					</ImageBackground>
				</View>
				<View 
					style={{
						alignSelf: "flex-start",
						alignItems: "center",
						marginLeft: 172,
					}}>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/w1Bbgc074x/h8x7aqnm_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							paddingTop: 20,
							paddingHorizontal: 30,
						}}
						>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 30,
								marginBottom: 45,
							}}>
							{"4"}
						</Text>
					</ImageBackground>
					<View 
						style={{
							position: "absolute",
							bottom: 1,
							right: -80,
							width: 304,
							height: 59,
							backgroundColor: "#FFFFFF1A",
							borderRadius: 14,
						}}>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}