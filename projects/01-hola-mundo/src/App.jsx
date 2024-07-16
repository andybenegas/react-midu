import { TwitterFollowCard } from "../TwitterFollowCard";

const users = [
    {
        userName: 'andybngs',
        name: 'Andrés Benegas',
        isFollowing: true,
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false,
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernández',
        isFollowing: true,
    }
]

export function App() {

    return (
        <section className="App">
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}  