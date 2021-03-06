import { Pump } from 'src/pump';

export class Reactor {
	static MAXIMUM_TEMPERATURE = 250;

	pumps: Pump[] = [];

	temperature: number = -10;

	split() {
		this.temperature += 20;
		console.log(`[reactor] splitting! temperature now @ ${this.temperature}`);

		if (this.temperature > Reactor.MAXIMUM_TEMPERATURE) {
			for (const pump of this.pumps) {
				pump.cool(this);
			}
		}
	}
}
