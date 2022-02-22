/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text>
        {title}
      </Text>
      <Text>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = true;


  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Section title="Step One">
            Edit <Text>App.tsx</Text> this aasdf
            screen and then come back to see your edits.  asdf
            <Text>Hello World! Allright lets rock and have fun</Text>
          </Section>

          <Section title="Debug">
          <Text>Hello World!</Text>
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
