import { ChallengesRepository } from "../../application/repositories/ChallengesRepository";
import { Challenge } from "../../domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengesRepository {
  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.items.find((challenge) => challenge.id === id);

    return challenge || null;
  }
}
