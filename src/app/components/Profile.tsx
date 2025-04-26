import { profile } from "@/data/profile";;

export default function Profile() {
    return (
      <div>
        <h1 className="text-title">Profile</h1>
        <div className="lg:w-96 leading-snug">
          <img
            className="size-20 box-border select-none pointer-events-none"
            src={profile.avatar}
            alt={profile.name}
          />
          <h1 className="font-bold">{profile.name}</h1>
          <div className="flex flex-row gap-4">
            <p className="text-muted">{profile.age}{profile.gender}</p>
            <p className="text-muted">{profile.home}</p>
          </div>
          <p>{profile.bio}</p>
        </div>
      </div>
    );
}