import { Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
	const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João'];

	function handleParticipantAdd() {
		console.log("add...");
	}

	function handleParticipantRemove(name: string) {
		console.log("remove...");
	}

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro</Text> 

			<View style={styles.form}>
				<TextInput
					style={styles.input} 
					placeholder="Nome do participante"
					placeholderTextColor="#6b6b6b"
				/>

				<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				{
					participants.map(participant => (
						<Participant 
							key={participant}
							name={participant}
							onRemove={() => handleParticipantRemove("Rodrigo")} 
						/>
					))
				}
			</ScrollView>
    </View>
  )
}