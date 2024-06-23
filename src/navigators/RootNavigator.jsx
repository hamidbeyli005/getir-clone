import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        tabBarStyle: {
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sell"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton {...props}>
              <Entypo name="list" size={32} color="#FFD00C" />
            </CustomTabButton>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;

const CustomTabButton = ({ children }) => {
  return (
    <TouchableOpacity
      style={{
        top: -8,
        justifyContent: "center",
        alignItems: "center",
        width: 55,
        height: 55,
        borderRadius: 33,
        backgroundColor: "#5C3EBC",
        borderWidth: 2,
        borderColor: "#FFF",
      }}
    >
      {children}
    </TouchableOpacity>
  );
};
