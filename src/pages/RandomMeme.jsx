import { useEffect, useState } from "react";
import useTagInput from "../components/useTag";
import { TagField } from "../components/TagField";
import { BasicTabs } from "./OutputView";
import { Search } from "lucide-react";
var ApiLeague = require("../api_league");

export const RandomMeme = ({ ApiKey }) => {
  let defaultClient = ApiLeague.ApiClient.instance;
  let apiKey = defaultClient.authentications["apiKey"];
  apiKey.apiKey = ApiKey;
  const [keywordsInImage, setKeywordsInImage] = useState(true);
  const [mediaType, setMediaType] = useState("image");
  const [minRating, setMinRating] = useState(0.0);
  const [maxAgeDays, setMaxAgeDays] = useState(30);
  const [memes, setMemes] = useState([]);
  const [jsonResponse, setJsonResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const MAX_TAGS = 5;
  const { tags, handleAddTag, handleRemoveTag, getTags } =
    useTagInput(MAX_TAGS); // pass the maximum tags

  const randomMeme = async () => {
    try {
      setLoading(true);
      let apiInstance = new ApiLeague.HumorApi();
      let opts = {};

      if (getTags() && getTags().length > 0) {
        opts.keywords = getTags().join(",").trim();
      }

      opts.keywordsInImage = keywordsInImage;
      opts.mediaType = mediaType;
      opts.minRating = parseFloat(minRating);
      opts.maxAgeDays = parseInt(maxAgeDays, 10);

      apiInstance.randomMeme(opts, (error, data) => {
        if (error) {
          console.error(error);
        } else {
          setMemes([data]);
          setJsonResponse(data);
          console.log("API called successfully. Returned data: ", data);
        }
      });
    } catch (error) {
      console.error("Error fetching memes:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("Meme", memes);
  }, [memes]);
  return (
    <div className="flex mt-2 items-start space-y-5 max-h-[75%]">
      <div className="flex flex-col w-full max-h-[71vh] items-center justify-start border-gray-200 border-r-2 p-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-lg">
          <label className="flex flex-col space-y-1">
            <span className="text-gray-700 font-semibold">Keywords</span>
            <TagField
              tags={tags}
              addTag={handleAddTag}
              removeTag={handleRemoveTag}
              maxTags={MAX_TAGS}
            />
          </label>

          <label className="flex flex-col space-y-1">
            <span className="text-gray-700 font-semibold">
              Keywords in image?
            </span>
            <select
              className="px-2 h-8 text-sm text-gray-600 w-full border rounded focus:border-blue-500 focus:ring-0 outline-none"
              value={keywordsInImage}
              onChange={(e) => setKeywordsInImage(e.target.value === "true")}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>

          <label className="flex flex-col space-y-1">
            <span className="text-gray-700 font-semibold">Media Type</span>
            <select
              className="px-2 h-8 text-sm text-gray-600 w-full border rounded focus:border-blue-500 focus:ring-0 outline-none"
              value={mediaType}
              onChange={(e) => setMediaType(e.target.value)}
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
              <option value="jpg">JPG</option>
              <option value="png">PNG</option>
              <option value="gif">GIF</option>
            </select>
          </label>

          <label className="flex flex-col space-y-1">
            <span className="text-gray-700 font-semibold">Min Rating</span>
            <input
              type="number"
              min={0}
              max={1}
              step={0.1}
              className="px-2 h-8 text-sm text-gray-600 w-full border rounded focus:border-blue-500 focus:ring-0 outline-none"
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
            />
          </label>

          <label className="flex flex-col space-y-1">
            <span className="text-gray-700 font-semibold">Max Age (days)</span>
            <input
              type="number"
              value={maxAgeDays}
              min={0}
              className="px-2 h-8 text-sm text-gray-600 w-full border rounded focus:border-blue-500 focus:ring-0 outline-none"
              onChange={(e) => setMaxAgeDays(e.target.value)}
            />
          </label>
        </div>
        <div className="pt-2">
          <button
            disabled={loading}
            className="bg-blue-600 text-white p-3 rounded-xl border-b-4 border-blue-800"
            onClick={randomMeme}
          >
            <div className="flex space-x-2 items-center">
              <span>Random Meme</span>

              <Search />
            </div>
          </button>
        </div>
      </div>
      <div className="w-full pl-4 max-w-5xl">
        <BasicTabs
          Resource={memes}
          jsonResponse={jsonResponse}
          Loading={loading}
        />
      </div>
    </div>
  );
};
